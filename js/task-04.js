let credits = 23580;
const priceDroid = 3000;
2;
const droneAmount = prompt('Какое колличество дронов вы хотите купить?');

if (droneAmount === null) {
  console.log('Отменено пользователем!');
} else if (droneAmount !== null) {
  let totalPrise = droneAmount * 3000;

  if (totalPrise > credits) {
    console.log('Недостаточно средств!');
  } else {
    credits = credits - totalPrise;
    alert(
      `Вы купили ${droneAmount} дроидов, на счету осталось ${credits} кредитов.`,
    );
  }
}
