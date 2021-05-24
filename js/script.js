const app = new Vue (
    {
        el:"#root",
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },     
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            bootMessages: [
                {
                    date: "",
                    text: "Non sei simpatico e non fai ridere nessuno",
                    status: "received"
                },
                {
                    date: "",
                    text: "Non credo di aver capito",
                    status: "received"
                },
                {
                    date: "",
                    text: "Ah ah ah",
                    status: "received"
                }, 
                {
                    date: "",
                    text: "Eccoci, rientriamo",
                    status: "received"
                },
                {
                    date: "",
                    text: "Proviamo",
                    status: "received"
                },
                {
                    date: "",
                    text: "Stai giocando a Guitar Hero?",
                    status: "received"
                },
            ],
            activeIndex: 0,
            newMessage: "",
            loading:"",
            search:""
        },
        methods: {
            getImage: function(contactIndex) {
                return "img/avatar" + this.contacts[contactIndex].avatar  + ".jpg" ; 
            },
            getLastMessage: function(contact) {
                const message = contact.messages[contact.messages.length -1];
                return message;
            },
            getLastMessageDate: function(contact) {
                return contact.messages[contact.messages.length -1];
            },
            thisChat: function(newIndex) {
                return this.activeIndex = newIndex;
            },
            addNewMessage: function () {
                this.contacts[this.activeIndex].messages.push(
                    { date: dayjs().format('DD/MM/YY HH:mm:ss'),
                    text:this.newMessage, 
                    status:'sent',
                });
                this.newMessage = "";
            },
            getRandom: function(max, min) {
                    return Math.floor((Math.random() * (max - min + 1)) + min); 
                },
            bootMessage: function () {
                let x = this.contacts[this.activeIndex].messages.push(
                    {date: dayjs().format('DD/MM/YY HH:mm:ss'),
                    text:this.bootMessages[1].text, 
                    status:'received',
                });
                return x;
            },
            delay: function() {
                 let x = this
                setTimeout(function(){ 
                    x.bootMessage();
                }, 1000);
            },
            searchContact: function () {
                return this.contacts.map(contact => {
                    if (contact.name.toLowerCase().includes(this.search.toLowerCase())){
                        contact.visible= true;
                    } else {
                        contact.visible= false;
                    }
                    console.log(contact.visible);
                    
                });
            }
        },
        // computed: {
        //     filteredList() {
        //       return this.contacts.filter(contact => {
        //           if () {

        //               return contact.name.toLowerCase().includes(this.search.toLowerCase());
        //           }
        //       })
        //     }
        // }
        // updated: function() {
        //     const scroll = document.getElementById("message-chat");
        //     const lastMessage = scroll[scroll.length -1];
        //     lastMessage.scrollIntoView();
        // }
    },
);