export class Time {
    static instance: Time

    private constructor(){}

    static getInstance(): Time{
        if(!this.instance){
            this.instance = new Time()
        }

        return this.instance
    }

    wait(time: number): Promise<void> {
        return new Promise(res => {
            setTimeout(() => {
                res()
            }, time)
        })
    }
}
