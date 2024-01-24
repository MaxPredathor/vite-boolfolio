<template>
    <div>
        <form @submit.prevent="test123()">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="newMail.name" class="form-control" id="name" placeholder="Enter name">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" v-model="newMail.email" class="form-control" id="email" aria-describedby="emailHelp"
                    placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="address" v-model="newMail.address" class="form-control" id="address"
                    placeholder="Enter address">
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea style="height: 200px" v-model="newMail.message" class="form-control" id="message"
                    placeholder="Enter message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="reset" class="btn btn-info ms-2">Reset</button>
        </form>
    </div>
</template>

<script>
import { store } from "../store.js";
import axios from "axios";
export default {
    name: "ContactForm",
    data() {
        return {
            store,
            newMail: {
                name: "",
                email: "",
                address: "",
                message: "",
            },

        }
    },
    methods: {
        test123() {
            axios.post(this.store.apiURL + "contacts", this.newMail)
                .then((res) => {
                    console.log(res);
                    this.newMail = {
                        name: "",
                        email: "",
                        address: "",
                        message: "",
                    }
                })
        }
    },
}
</script>

<style lang="sass" scoped>

</style>