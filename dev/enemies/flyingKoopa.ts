/// <reference path="enemy.ts" />
namespace Enemies{
    export namespace FlyingKoopaRed{
        export class FlyingKoopa extends Enemy implements Observer {
                    
            constructor(parent:HTMLElement, subject: Subject) {
                super("flying-koopa", parent);

                subject.subscribe(this)
                this.speed = -3;
                this.x = 1000;
                this.y = Math.floor(Math.random() * 270) + 1;
                this.height = 80;
                this.width = 70;
                
            }

            public notify(){
                //Krijgt een notify van main.ts en voert de volgende functie uit
                this.changeMovementSpeed();
            }

            public changeMovementSpeed(){
                //flyingKoopa wordt voor 5 seconden vertraagd.
                this.speed = -0.5;
                setInterval(() => this.changeSpeedBack(), 5000);
            }

            public changeSpeedBack(){
                //Snelehid van flyingKoopa wordt na 5 seconden teruggezet
                this.speed = -3
            }

            public draw():void {
                this.x += this.speed;
                this.div.style.transform ="translate("+this.x+"px,"+this.y+"px)";

                // Als FlyingKoopa uit het scherm is, wordt hij teruggezet naar x = 1200
                if(this.x <= -130){
                    this.x = 1200;
                    this.y = Math.floor(Math.random() * 270) + 1;
                    if(Game.getInstance().powerupActive == false){
                        this.speed = Math.floor(Math.random() * -6) - 1;
                    }
                    Game.getInstance().score -=10;
                }
            }
        }
    }
}

import fc1 = Enemies.FlyingKoopaRed.FlyingKoopa;