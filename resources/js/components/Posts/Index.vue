<template>
    <div class="container-fluid">
        <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <!-- <th scope="col">№</th> -->
                        <th scope="col">Title</th>
                        <th scope="col">Text</th>
                        <th scope="col">Created</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts" :key="post">
                        <!-- <td>1</td> -->
                        <td>{{ post.title }}</td>
                        <td>{{ post.post_text.substring(0, 35)}}...</td>
                        <td>{{ post.created_at }}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            axios.get('/api/posts').then(request => {
                this.posts = request.data.data;
            });
        }
    }
</script>

<style>

</style>
