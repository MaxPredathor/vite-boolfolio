<template>
    <div class="col-3">
        <div class="card">
            <img class="card-img-top" :src="`${store.imagePath}${project.image}`" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text overflow-hidden" style="height: 100px">{{ project.body }}</p>
                <router-link class="btn btn-primary" :to="{ name: 'project-details', params: { slug: project.slug } }">View
                    Details</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../store.js";
export default {
    name: 'CardProject',
    data() {
        return {
            store,
        }
    },
    props: {
        project: Object
    }
}
</script>

<style lang="scss" scoped></style>