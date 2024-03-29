<template>
    <div id="home">
        <div ref="blob" id="blob"></div>
        <div id="blur"></div>
        <div id="my-container">
            <div id="content">
                <div id="title-paragraph">
                    <h1>Welcome.</h1>
                    <div>
                        <div id="small-border"></div>
                        <p>My name is Massimiliano Gilli, I'm a full-stack web developer based in Bologna, IT. I have
                            developed
                            many types of front-ends from well know DJ applications to
                            Ecommerce booking platforms.</p>
                        <p>I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively
                            implemented
                            UX.</p>
                    </div>
                </div>
                <div id="projects">
                    <div id="title">
                        <h1>
                            <router-link class="text-white text-decoration-none"
                                :to="{ name: 'projects' }">Projects</router-link>
                        </h1>
                    </div>
                    <div id="projects-container">
                        <ul v-if="projects">
                            <li v-for="project in projects" :key="project.id">
                                <router-link class="text-white text-decoration-none"
                                    :to="{ name: 'project-details', params: { slug: project.slug } }">{{
                                        project.title }}</router-link>
                            </li>
                        </ul>
                        <div id="top-small"></div>
                        <div id="left-small"></div>
                    </div>
                </div>
            </div>
            <div class="stick" id="left"></div>
            <div class="stick" id="top"></div>
            <div class="stick" id="right"></div>
            <div class="stick" id="bottom"></div>
        </div>
    </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
export default {
    name: "Home",
    data() {
        return {
            store,
            projects: [],
        }
    },
    methods: {
        blobFollowCursor() {
            const blob = this.$refs.blob;
            document.addEventListener("mousemove", (event) => {
                const { clientX, clientY } = event;

                blob.animate(
                    {
                        left: `${clientX}px`,
                        top: `${clientY}px`,
                    },
                    { duration: 2500, fill: "forwards" }
                );
            });
        },
        getAllProjects() {
            axios
                .get(store.apiURL + "projects")
                .then((res) => {
                    console.log(res.data);
                    this.projects = res.data.results.data;
                    console.log(this.projects);
                    // this.currentPage = res.data.results.current_page;
                    // this.lastPage = res.data.results.last_page;
                });
        },
    },
    mounted() {
        this.store.showHeader = false;
        this.blobFollowCursor();
        this.getAllProjects();
    }
};
</script>

<style lang="scss" scoped>
@use "@/assets/style/partials/variables" as *;

#home {
    height: 100vh;
    width: 100%;
    background-color: $background-color;

    #blob {
        position: fixed;
        height: 200px;
        aspect-ratio: 1;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        animation: rotate 20s infinite;
        background: none;
        transition: background 0.2s ease-in-out;
        background: $linear-gradient-background;
        background: $linear-gradient;
        z-index: 1;
    }

    #blur {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 2;
        backdrop-filter: blur(200px);
    }

    #my-container {
        height: 100%;
        width: 80%;
        margin: auto;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 4;

        .stick {
            background: $linear-gradient;
            position: absolute;
            z-index: 5;
            width: 350px;
            height: 20px;
        }

        #left {
            transform: rotate(90deg);
            left: -166px;
            top: 28%;
            border-radius: 0 0 0 1.4em;
            clip-path: polygon(0 0, 93% 0, 100% 100%, 0 100%);
        }

        #top {
            left: 0px;
            top: 10%;
            border-radius: 1.4em 0 0 0;
            clip-path: polygon(0 0, 100% 0, 93% 100%, 0% 100%);
        }

        #bottom {
            right: 0;
            bottom: 10%;
            border-radius: 0 0 1.4em 0;
            clip-path: polygon(7% 0, 100% 0, 100% 100%, 0 100%);
        }

        #right {
            transform: rotate(90deg);
            right: -166px;
            bottom: 28%;
            border-radius: 0 1.4em 0 0;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 7% 100%);
        }

        #content {
            width: 80%;
            display: flex;
            color: $white-text-color;
            font-family: $main-font;

            #title-paragraph {
                width: 55%;
                position: relative;
                user-select: none;

                h1 {
                    font-size: 7rem;
                    font-weight: $fw-title;
                }

                #small-border {
                    width: 3px;
                    height: 49%;
                    position: absolute;
                    background: $linear-gradient;
                    transform: rotate(180deg);
                    border-radius: 1em;
                }

                p {
                    padding-left: 20px;
                    font-size: 1rem;
                    font-weight: $fw-title;
                    // font-weight: bold;
                }

            }

            #projects {
                width: 45%;
                padding-left: 20%;

                #title {
                    height: 30%;
                    width: 100%;

                    h1 {
                        font-size: 2rem;
                        padding-top: 20px;
                    }
                }

                #projects-container {
                    height: 70%;
                    width: 100%;
                    position: relative;

                    ul {
                        list-style-type: none;

                        li {
                            font-size: 1.2rem;
                        }
                    }

                    #left-small {
                        position: absolute;
                        left: -25%;
                        top: 15%;
                        width: 100px;
                        height: 3px;
                        transform: rotate(270deg);
                        background: $linear-gradient;
                        border-radius: 1em 2em 0.5em 1em;
                    }

                    #top-small {
                        position: absolute;
                        top: -8.4%;
                        left: -9%;
                        width: 100px;
                        height: 3px;
                        background: $linear-gradient;
                        transform: rotate(180deg);
                        border-radius: 1em 2em 0.5em 1em;
                    }
                }
            }
        }
    }
}


@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
