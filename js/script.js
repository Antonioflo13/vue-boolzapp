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
                            status: 'sent',
                            toggle: true
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            toggle: true
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            toggle: true
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
                            status: 'sent',
                            toggle: true
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            toggle: true
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            toggle: true
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
                    text: "come stai?",
                },
                {
                    text: "Non credo di aver capito",
                },
                {
                    text: "Ah ah ah",
                }, 
                {
                    text: "Sei a lavoro?",
                },
                {
                    text: "Cosa fai nel pomeriggio?",
                },
            ],
            activeIndex: 0,
            newMessage: "",
            writing: true,
            search:"",
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
                return true;
            },
            bootMessage: function () {
                const getRandom =  Math.floor((Math.random() * ((this.bootMessages.length -1)- 0 + 1)) + 0);
                let x = this.contacts[this.activeIndex].messages.push(
                    {date: dayjs().format('DD/MM/YY HH:mm:ss'),
                    text:this.bootMessages[getRandom].text, 
                    status:'received',
                });
                return x;
            },
            delay: function() {
                 let x = this
                 this.writing = false;
                setTimeout(function(){ 
                    x.bootMessage();
                    x.writing = true;
                }, 1000);
            },
           time: function() {
               const oclock = dayjs().format('DD/MM/YY HH:mm:ss');
               return oclock;
            },
            toggle_dropdown: function(index) {
                if (this.contacts[this.activeIndex].messages[index].toggle == true) {
                    this.contacts[this.activeIndex].messages[index].toggle = false;
                } else {
                    this.contacts[this.activeIndex].messages[index].toggle = true;
                }
            }, 
            searchContact: function () {
                return this.contacts.map(contact => {
                    if (contact.name.toLowerCase().includes(this.search.toLowerCase())){
                        contact.visible= true;
                    } else {
                        contact.visible= false;
                    }
                });
            },
            deleteMessages: function (index) {
                this.contacts[this.activeIndex].messages.splice(index,1);
            },
        },
        updated: function() {
            const elmt = document.getElementsByClassName("wrapper-chat");
            const lastMessage = elmt[elmt.length - 1];
            lastMessage.scrollIntoView();
        },
        
    },
);