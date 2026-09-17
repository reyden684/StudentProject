"use strict";

const totalTasks = 7;
const completedTasks = 2;

const isValidCompleted = Number.isInteger(completedTasks) && typeof completedTasks === "number";
const isValidTotal = Number.isInteger(totalTasks) && typeof totalTasks === "number";




if (!isValidTotal || !isValidCompleted) 
{
  console.log("Ошибка: входные данные должны быть целыми числами");
}

else if ((totalTasks === 0) && (completedTasks === 0))
  {
    console.log("Задач пока нет");
  }
else if (((0 <= totalTasks) && (totalTasks <= 1000)) && ((0 <= completedTasks) && (completedTasks <= totalTasks)))
  {
    let remainingTasks = totalTasks - completedTasks;
    let procentComplete = (completedTasks/totalTasks) * 100;

    console.log(`Всего задач: ${totalTasks}`)
    console.log(`Выполнено: ${completedTasks}`)

    console.log(`Осталось: ${remainingTasks}`);
    console.log(`Прогресс: ${procentComplete.toFixed(1)}%`)
    
    if (totalTasks === completedTasks)
    {
      console.log("Статус: Завершено");
    }
    else if (completedTasks === 0)
    {
      console.log("Статус: Не начато");
    }
    else {console.log("Статус: В работе");}
  }
else
  {
      console.log("Ошибка: значения выходят за допустимые границы (0-1000) или выполненных задач больше, чем всего");
  } 

