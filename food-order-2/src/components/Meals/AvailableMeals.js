import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const getMeals = async () => {
    try {
      const response = await fetch(
        'https://react-http-80271-default-rtdb.firebaseio.com/meals.json'
      );
      const data = await response.json();

      setIsLoading(false);

      const mealsArr = [];
      Object.keys(data).forEach((id) => {
        mealsArr.push({ ...data[id], id });
      });

      setMeals(mealsArr);
    } catch (error) {
      setError(<p>There was an error trying to fetch meals</p>);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {error}
        {isLoading && <p>Loading meals...</p>}
        {!isLoading && !error && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
