

const scriptsInEvents = {

	async EventSheetMain_Event14_Act3(runtime, localVars)
	{
		const player = runtime.objects.Player.getFirstInstance();
		if (!player) return;
		
		if (player.instVars.Invincible) return;
		
		let lives = player.instVars.Lives;
		if (lives <= 0) return;
		
		player.instVars.Lives = lives - 1;
		lives = player.instVars.Lives;
		
		if (lives === 2) {
		    const heart3 = runtime.objects.Heart3.getFirstInstance();
		    if (heart3) heart3.destroy();
		}
		else if (lives === 1) {
		    const heart2 = runtime.objects.Heart2.getFirstInstance();
		    if (heart2) heart2.destroy();
		}
		else if (lives === 0) {
		    const heart1 = runtime.objects.Heart.getFirstInstance();
		    if (heart1) heart1.destroy();
		    console.log("Game Over");
		}
		
		player.instVars.Invincible = true;
		
		const bullet = runtime.objects.EnemyBullet.getFirstPickedInstance();
		if (bullet) bullet.destroy();
	},

	async EventSheetMain_Event19_Act2(runtime, localVars)
	{
		const player = runtime.objects.Player.getFirstInstance();
		if (!player) return;
		
		const bombs = player.instVars.Bombs;
		
		if (bombs === 2) {
		    const bomb3 = runtime.objects.Bomb3.getFirstInstance();
		    if (bomb3) bomb3.destroy();
		}
		else if (bombs === 1) {
		    const bomb2 = runtime.objects.Bomb2.getFirstInstance();
		    if (bomb2) bomb2.destroy();
		}
		else if (bombs === 0) {
		    const bomb1 = runtime.objects.Bomb.getFirstInstance();
		    if (bomb1) bomb1.destroy();
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
