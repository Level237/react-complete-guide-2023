import { useEffect, useState } from "react";
import Card from "../Ui/Card";
import classes from "./AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem";

const AvailableMeals=(props)=>{

  const [meals,setMeals]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [httperror,setHttpError]=useState(null)
  useEffect(()=>{

    const fetchMeals=async()=>{
      const response=await fetch("https://food-15762-default-rtdb.firebaseio.com/meals.json")
      
      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      const responseData=await response.json();

      const loadedMeals=[];

      for(const key in responseData){

        loadedMeals.push({
          id:key,
          name:responseData[key].name,
          description:responseData[key].description,
          price:responseData[key].price
        })
       
      }
      console.log(loadedMeals)
      setMeals(loadedMeals)
      setIsLoading(false)
    }


      fetchMeals().catch((error)=>{
        setIsLoading(false)
        setHttpError(error.message)
      })
    
   
  },[])

  if(isLoading){
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if(httperror){
    return (
      <section className={classes.MealsError}>
        <p>{httperror}</p>
      </section>
    )
  }
    const mealsList=meals.map((meal)=>{
        return <MealItem id={meal.id}   key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
    })
    return (
        <section className={classes.meals}>

        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
            
        </section>
    )
}

export default AvailableMeals