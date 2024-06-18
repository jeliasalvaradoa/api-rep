import { firefox } from "playwright";


const consultar = async (ced,config) => {
const brower = await firefox.launch(
{ headless: true}

)
const url = config.url
const page = await brower.newPage()

await page.goto(`${url}${ced}`)
const selector = config.selector

const elector = await page.$$eval(selector,
   (results,config) => (
    
  
    results.map((el) =>{
      const selector = config.selector
      const selector_part1 = config.selector_part1
      const selector_part2 = config.selector_part2
      const selector_part3 = config.selector_part3
      const selector_part4 = config.selector_part4
      const cedula = el
                        .querySelector(`${selector}${selector_part1}(1)${selector_part2}`)
                        ?.innerText.replace(/[^0-9]+/g,"")
        const nombre = el
        .querySelector(`${selector}${selector_part1}(2)${selector_part2}${selector_part3}`)
        ?.innerText
        
        if (!nombre) return {error: 'No encontrado'}
        
        const estado = el
        .querySelector(`${selector}${selector_part1}(3)${selector_part2}`)
        ?.innerText
        const municipio = el
        .querySelector(`${selector}${selector_part1}(4)${selector_part2}`)
        ?.innerText
        const parroquia = el
        .querySelector(`${selector}${selector_part1}(5)${selector_part2}`)
        ?.innerText
        const centro = el
        .querySelector(`${selector}${selector_part1}(6)${selector_part2}${selector_part4}`)
        ?.innerText

        return {cedula, nombre, estado, municipio, parroquia, centro}

    })

  
   ),config )

   //console.log(elector)
   await brower.close()
 
 return elector
}

export default consultar;
