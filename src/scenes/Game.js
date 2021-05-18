import Phaser from '../lib/phaser.js'
import Nws from '../game/Nws.js'

export default class Game extends Phaser.Scene
{
    constructor()
    {
        super('game')
    }
    init()
    {

    }

    preload()
    {
         this.load.image('nws', 'src/assets/logoNws.jpg')
        
    }

    create()
    {
            this.add.image(230,240, 'nws')
            .setScale(0.7)

            this.palyer={
                clickDmg: 1,
                gold: 0
            };

            this.nws = this.physics.add.group({
                classType: Nws
            })

            
    }
    update()
    {

    }

}