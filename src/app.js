import { required, minLength, maxValue, numeric, maxLength } from 'vuelidate/lib/validators'

export default {
    name: 'app',
    data: () => {
        return {
            firstName: '',
            lastName: '',
            patronym: '',
            tel: '',
            birthDate: '',
            gender: '',
            clientGroups: [],
            doctor: '',
            multiCheckDisplay: 'none',
            sms: false,
            docType: '',
            address: {
                index: '',
                country: '',
                region: '',
                city: '',
                street: '',
                houseNum: ''
            },
            id: {
                series: '',
                num: '',
                giver: '',
                date: ''
            },
            msgStyle: { display: 'none' },
            selStyle: {}
        }
    },

    computed: {
        multiSelText() {
            if (this.clientGroups.length>0) {
                return this.clientGroups.join(', ')
            } else {
                return ''
            }
        },
    },

    validations: {
        firstName: {
            required
        },
        lastName: {
            required
        },
        clientGroups: {
            required
        },
        tel: {
            required,
            correctTel(val) {
                const regex = /^7[0-9]{10}/;
                return regex.test(val)
              },
            maxLength: maxLength(11)
        },
        birthDate: {
            required,
            correctDate(val) {
                const today = new Date()
                const birth = new Date(val)
                return today.getTime() > birth.getTime()
            }
        },
        address: {
            city: {
                required
            }
        },
        id: {
            docType: {
                required
            },
            date: {
                required,
                correctDate(val) {
                    const today = new Date()
                    const birth = new Date(val)
                    return today.getTime() > birth.getTime()
                }
            },
            series: { numeric },
            num: { numeric }
        }
    },

    methods: {
        submit(e) {
            this.msgStyle = { display: 'flex' }
        },
        showOptions() {
            if (this.multiCheckDisplay === 'none') {
                this.multiCheckDisplay = 'block'
                this.selStyle = {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0
                }
            } else {
                this.multiCheckDisplay = 'none'
                this.selStyle = {
                    borderBottomLeftRadius: '4px',
                    borderBottomRightRadius: '4px'
                }
            }
        },
        status(valid) {
            return {
                error: valid.$error,
            }
        },
        hideMsg() {
            this.msgStyle = { display: 'none' }
            Object.assign(this.$data, this.$options.data.call(this))
        }
    }
}