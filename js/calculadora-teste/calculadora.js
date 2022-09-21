export default{
    data(){
        return {
            previous: null,
            current: '',
            operator: null,
            operatorClicked: false,
        }
    }, 
    methods: {
        clear(){
            this.current =''; 
        }, 
        sign(){
            this.current = this.current.chartAt(0) === '-' ? this.current.slice(1):`-${this.current}`;
        },
        //Aparecendo funções 
        append(number){
            if(this.operatorClicked){
                this.current ='';
                this.operatorClicked = false;
            }
            this.current = `${this.current}${number}`;
        }, 
        logs(){
        
        }
    }

}