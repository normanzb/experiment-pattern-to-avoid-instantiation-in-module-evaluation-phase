import { singleton } from './avoidInstantiationInEvaluation'

console.log('evaluating main')

setTimeout(() => {
    singleton.instance.utilityFunction1()    
}, 3000)
