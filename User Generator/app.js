const btn = document.querySelector("#newUser");

btn.addEventListener("click", ()=>{
    mountedApp.genNewUser();
});

const getUser = async () => {
    const data = await fetch("https://randomuser.me/api/");
    const parsedData = await data.json();
    return parsedData.results[0];
}

const app = Vue.createApp({
    data() {
        return {
            firstName: null,
            lastName: null,
            email: null,
            phone: null,
            image: null,
        }
    },
    methods: {
        async genNewUser() {
            const user = await getUser();
            this.firstName = user.name.first;
            this.lastName = user.name.last;
            this.email = user.email;
            this.phone = user.phone;
            this.image = user.picture.large;
        }
    }
});

const mountedApp = app.mount("#app");
mountedApp.genNewUser();