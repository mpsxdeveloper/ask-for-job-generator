const app = Vue.createApp({    
    data() {
        return {
            selected: '',
            nome: 'Você',
            objetivo: 'está buscando emprego/estágio',
            texto: 'Estou procurando emprego/estágio.',
            hashtags: '#Oportunidades #Emprego #Estágio',
            vaga: '',
            vagas: [],
            tecnologias: ['HTML', 'CSS', 'JavaScript']
        }
    },
    methods: {
        setTecnologias(e) {
            const tech = e.target.value
            if(tech !== '') {
                this.tecnologias = this.tecnologias.filter(t => t !== tech)                
                this.setIcones(tech)
            }            
        },
        setVagas(e) {
            let tag = e.target.value
            if(e.keyCode === 188 && tag.length > 3) {
                this.vaga = ''
                this.vagas.push(tag)                
            }
        },
        setIcones(icone) {
            let icon = document.createElement('i')
            switch(icone) {
                case 'HTML':
                    icon.classList.add("fa-brands", "fa-html5", "fa-2x", "ps-1", "html-icon")                    
                break
                case 'CSS':
                    icon.classList.add("fa-brands", "fa-css3", "fa-2x", "text-primary", "ps-1")
                break
                case 'JavaScript':
                    icon.classList.add("fa-brands", "fa-js", "fa-2x", "text-warning", "ps-1")
                break                               
            }
            document.querySelector('#icones').appendChild(icon)
        }
    }
})

app.mount('#app')