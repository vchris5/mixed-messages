function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function generateWisdom(collectiveWisdom) {
  let personalWisdom = [];

  for (let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)

    switch (prop) {
      case 'signInfo':
        personalWisdom.push({
          message: `Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`,
          emoji: getEmoji(collectiveWisdom[prop][optionIdx])
        });
        break;
      case 'fortuneOutput':
        personalWisdom.push({
          message: `You are having: "${collectiveWisdom[prop][optionIdx]}".`,
          emoji: getEmoji(collectiveWisdom[prop][optionIdx])
        });
        break;
      case 'advice':
        personalWisdom.push({
          message: `You should: "${collectiveWisdom[prop][optionIdx]}".`,
          emoji: getEmoji(collectiveWisdom[prop][optionIdx])
        });
        break;
      default:
        personalWisdom.push({
          message: 'There is not enough info.',
          emoji: '❓'
        });
    }
  }

  return personalWisdom;
}

function getEmoji(value) {
  switch (value) {
    case 'star':
      return '⭐️';
    case 'moon':
      return '🌙';
    case 'sun':
      return '☀️';
    case 'comet':
      return '☄️';
    case 'terrible luck':
      return '🌪';
    case 'bad luck':
      return '🌧';
    case 'ok luck':
      return '🌈';
    case 'good luck':
      return '🔮';
    case 'great luck':
      return '🍀';
    case 'go out and eat':
      return '🍽️';
    case 'not read this':
      return '❌📖';
    case 'play more': 
      return '⏭️';
    case 'trust no one':
      return '🚫👥'
    default:
      return '❓';
  }
}

function displayWisdom(wisdom) {
  const formatted = wisdom.map(({ message, emoji }) => {
    return `${emoji}\n${message}`;
  }).join('\n');

  console.log(formatted);
}

const collectiveWisdom = {
  signInfo: ['star', 'moon', 'sun', 'comet'],
  fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
  advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
};

const personalWisdom = generateWisdom(collectiveWisdom);
displayWisdom(personalWisdom);
