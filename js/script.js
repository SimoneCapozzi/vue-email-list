const app = new Vue({

  el: '#app',

  data:{
    emails: [],
    
  },

  methods:{

  },

  created(){

  },

  mounted(){
    //richiamo la funzione callApi
    this.callApi("https://flynn.boolean.careers/exercises/api/random/mail")
  },

  methods:{
    callApi(url){
      axios.get(url) //faccio la chiamata axios
      .then((resp)=>{   //risposta
          console.log(resp)
          //prendo l'array email e gli pusho al suo interno il risultato del percorso 
          this.emails.push(resp.data.response)
          /* console.log(this.email) */

          

          if(this.emails.length < 10){
              this.callApi(url)
          }
      })
      .catch((err)=>{   //in caso di errore    
          console.log(err)
      })
  },
  }


}) 