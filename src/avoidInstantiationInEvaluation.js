import Constructor from './Constructor'

let ctor

const exportObject = {
    get instance () {
        ctor = new Constructor()
        return {
            utilityFunction1: () => {
                ctor.method1()
            },
            utilityFunction2: () => {
                ctor.method2()
            }
        }
    }
}

export { exportObject as singleton }
