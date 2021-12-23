


class Phone { 
  constructor (
    name,
    color,
    model,
    weight,
    bluetooth,
    powerLevel
    ){
      this.name=name;
    this.color=color;
    this.model=model;
    this.weight=weight;
    this.bluetooth=bluetooth;}
    
togglePower (powerStatus){
  this.powerLevel=powerStatus;
};
};

export default Phone;