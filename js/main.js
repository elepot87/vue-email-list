// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Link doc Axios: https://github.com/axios/axios;
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const root = new Vue({
  el: "#root",
  data: {
    apiURL: "https://flynn.boolean.careers/exercises/api/random/mail",
    emails: [],
    imgLoading:
      "http://www.carloneworld.org/images/Speciale_Natale/gif_animate/babbo_natale/gif_natale_8.gif",
  },
  created() {
    this.getEmailList();
  },
  computed: {
    dataOk() {
      return this.emails.length === 10 ? true : false;
    },
  },
  methods: {
    getEmailList() {
      // Call to API
      for (let i = 0; i < 10; i++) {
        axios
          .get(this.apiURL)
          // Handle success
          .then((response) => {
            console.log(response.data);
            this.emails.push(response.data.response);
          })
          // Handle error
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
});
