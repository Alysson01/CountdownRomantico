export default class Countdown {
    constructor(futureDate) {
    this.futureDate = futureDate;
}

get _futureDate() {
    return new Date(this.futureDate);
}

get _actualDate() {
    return new Date();
}

get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
}

get _mes(){
    return Math.floor(this._timeStampDiff / (30*24*60*60*1000))
}

get _days(){
    return Math.floor(this._timeStampDiff / (24*60*60*1000))
}

get _hours(){
    return Math.floor(this._timeStampDiff / (60*60*1000))
}

get _minutes(){
    return  Math.floor(this._timeStampDiff / (60*1000))
}

get _seconds(){
    return Math.floor(this._timeStampDiff / (1000))
}

get _formato(){

    const mes = this._mes < 10 ? "0" + this._mes : this._mes;
    
    const days = this._days < 10 ? "0" + this._days % 30 : this._days % 30;
    
    const hours = this._hours % 24 < 10 ? "0" + (this._hours % 24) : this._hours % 24;
    
    const minutes = this._minutes % 60 < 10 ? "0" + (this._minutes % 60) : this._minutes % 60;
    
    const seconds = this._seconds % 60 < 10 ? "0" + (this._seconds % 60) : this._seconds % 60;

    return [ mes, days, hours, minutes, seconds]
}
}