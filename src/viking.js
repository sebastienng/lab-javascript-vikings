// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
        this.strength=strength;
    }

    attack (){
        return this.strength;
    }

    receiveDamage(dmg){
        this.health-=dmg;
    }
}

// Viking
class Viking extends Soldier{

    constructor(name,health,strength){
        super(health,strength);
        this.name=name;
    }
   
    receiveDamage(dmg){
        super.receiveDamage(dmg);
        if(this.health>0){
            return `${this.name} has received ${dmg} points of damage`;
        }else{
            return `${this.name} has died in act of combat`;
        }
       
    }

    battleCry(){
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(dmg){
        super.receiveDamage(dmg);

        if(this.health>0){
            return `A Saxon has received ${dmg} points of damage`;
        }else{
            return `A Saxon has died in combat`;
        }
       
    }

}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){ 
        const randomIndexSaxon= Math.floor(Math.random()*this.saxonArmy.length);
        const randomIndexViking= Math.floor(Math.random()*this.vikingArmy.length);

        const randomSaxon = this.saxonArmy[randomIndexSaxon];
        const randomViking = this.vikingArmy[randomIndexViking];
    
         const result = randomSaxon.receiveDamage(randomViking.attack());
       
        if(randomSaxon.health<=0){
           this.saxonArmy.splice(randomIndexSaxon,1)
        }

       return result;
    }
    
    saxonAttack(){ 
        const randomIndexSaxon= Math.floor(Math.random()*this.saxonArmy.length);
        const randomIndexViking= Math.floor(Math.random()*this.vikingArmy.length);

        const randomSaxon = this.saxonArmy[randomIndexSaxon];
        const randomViking = this.vikingArmy[randomIndexViking];
    
        const result = randomViking.receiveDamage(randomSaxon.attack());
        
        if(randomViking.health<=0){
            this.vikingArmy.splice(randomIndexViking,1);
        }
       
       return result;
    }


    oneMethodAttack(attacking,defending){
        const randomIndexAttacker= Math.floor(Math.random()*attacking.length);
        const randomIndexDefender= Math.floor(Math.random()*defending.length);

        const randomDefender = defending[randomIndexDefender];
        const randomAttacker = attacking[randomIndexAttacker];
       
        randomDefender.receiveDamage(randomAttacker.attack());
       
        if(randomDefender.health<=0){
            defending.splice(randomDefender,1);
        }
        
        console.log(this.showStatus());
    }

    showStatus(){
 
         if(this.saxonArmy.length===0){
            return "Viking have won the war of the century !";
         }else if(this.vikingArmy.length===0){
            return "Saxon have won the war of the century !";
         }else{
            return "Vikings and Saxons are still in the thick of battle"
         }
    }

}

const warrr = new War();

warrr.addSaxon(new Saxon(30,10));
warrr.addSaxon(new Saxon(30,10));
warrr.addSaxon(new Saxon(30,10));
warrr.addSaxon(new Saxon(30,10));

warrr.addViking(new Viking('v1',50,5));
warrr.addViking(new Viking('v2',50,5));
warrr.addViking(new Viking('v3',50,5));
warrr.addViking(new Viking('v4',50,5));

do{
    warrr.oneMethodAttack(warrr.saxonArmy,warrr.vikingArmy);
}while(warrr.saxonArmy.length>0 && warrr.vikingArmy.length>0)

    
  //  warrr.oneMethodAttack(warrr.vikingArmy,warrr.saxonArmy);




