"use strict";

const totalTasks = 7;
const completedTasks = 2;
const dailyLimit = 2;

let dayCount = 0;
let remainingTasks = totalTasks - completedTasks;
let overTasks;

const isTotalTasks =
  Number.isInteger(totalTasks) &&
  typeof totalTasks === "number";

const isCompletedTasks =
  Number.isInteger(completedTasks) &&
  typeof completedTasks === "number";

const isDailyLimit =
  Number.isInteger(dailyLimit) &&
  typeof dailyLimit === "number";

if (
  !isTotalTasks ||
  !isCompletedTasks ||
  !isDailyLimit ||
  totalTasks < 0 ||
  totalTasks > 1000 ||
  completedTasks < 0 ||
  completedTasks > totalTasks
)
{
  console.log("Ошибка: некорректное количество задач или введены не целые положительные числа");
}

else if (
  !isDailyLimit ||
  dailyLimit < 1 ||
  dailyLimit > 1000
)
{
  console.log("Ошибка: dayLimit вне диапазона [1...1000]");
}

else if (remainingTasks === 0)
{
  console.log("Все задачи уже выполнены");
  console.log("Потребуется дней: 0");
}

else
{
  console.log("Осталось задач: " + remainingTasks);

  while (remainingTasks != 0)
  {
    dayCount = dayCount + 1;

    if (remainingTasks >= dailyLimit)
    {
      remainingTasks = remainingTasks - dailyLimit;
      overTasks = dailyLimit;
    }
    else
    {
      overTasks = remainingTasks;
      remainingTasks = 0;
    }

    console.log(
      "День: " + dayCount +
      " Выполнено " + overTasks +
      ", осталось " + remainingTasks
    );
  }

  console.log("Потребуется дней: " + dayCount);
}