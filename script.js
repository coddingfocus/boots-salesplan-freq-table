const tabular_data = document.getElementById('table')
const offer_freq_table = {}
const selectedFile = document.getElementById('input')
// Using FileReader API 
      selectedFile.addEventListener('change', function(){
        const file = this.files[0]
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = function(evt){
            const data = evt.target.result
            const table = data.split('\n').sort()
            console.log(table)
            for(let row of table){
                let offer = row.trim()
                if(offer_freq_table[offer]){
                    offer_freq_table[offer]+=1
                }else{
                    offer_freq_table[offer]=1
                }
            }
            for(let offer in offer_freq_table){
              let tr = document.createElement('tr')
              let td1 = document.createElement('td')
              let td2 = document.createElement('td')
              tr.appendChild(td1).innerHTML=`${offer}`
              tr.appendChild(td2).innerHTML=`${offer_freq_table[offer]}`
              tabular_data.appendChild(tr)
            }
        }
      })  