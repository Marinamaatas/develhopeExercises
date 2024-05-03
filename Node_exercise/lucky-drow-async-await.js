function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

  async function getResults() {
    const players = ['Tina', 'Jorge', 'Julien'];
    const results = [];
  
    for (const player of players) {
      try {
        const result = await luckyDraw(player);
        results.push(result);
      } catch (error) {
        results.push(error.message);
      }
    }
  
    results.forEach((result) => console.log(result));
  }
  
  getResults();
  