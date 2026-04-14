

const scriptsInEvents = {

	async EventSheetMain_Event8_Act3(runtime, localVars)
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
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
