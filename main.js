import Phaser from './lib/phaser.js'

import Game from './scenes/Game.js'

export default  new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height:800,
    scenes:Game,
    physics:{
        default:'arcade',
        arcade:{
            gravity:{
                y: 200
            },
            debug:true
        }
    }
})

