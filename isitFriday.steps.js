import { Given, When, After, Then, AfterAll, AfterStep,Before,setDefaultTimeout,BeforeAll } from '@cucumber/cucumber'



Given("the day is not tuesday",()=>{
    console.log("the day is not tuesday")
})

When("the day is not thursday",()=>{
    console.log("the day is not thursday")
})

Then("the day might be friday",()=>{
    console.log("the day might be friday")
})