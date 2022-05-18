const Allpackages = [
    {heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}, 
    {heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}, 
    {heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', image:'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'},
    {heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}, 
    {heavy: true, priority: true, fragile: true, to: 'Brittany', trackingNumber: 'aeirhio4', image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}, 
    {heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', image:'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}, 
    {heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', image:'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}]



let currentPackages = Allpackages
let missingPackage = null
let guesses = 0

    function startGame(){
        let index = Math.floor(Math.random()*currentPackages.length)
        console.log(index)
        currentPackages[index].missing = true
        console.log('which box is missing', currentPackages[index]);
        missingPackage = currentPackages[index]
    }



    function drawPackages(){
        let template = ''
        currentPackages.forEach(package => {
         template += `
             <div class="col-md-3  m-5 p-3 bg-light" onclick="foundP(${package.TrackingNumber})">
             <img class="img-fluid" src="${package.image}" alt="">
             <h3 class="text-center">${package.to}</h3>
              <p class="text-center"><b>${package.trackingNumber}</b></p>
            </div>
         ` 
        })
        console.log(template);
        document.getElementById('packages').innerHTML = template
      }

      function drawScore(){
          document.getElementById('guess-count').innerText = 'current guesses: ' + guesses
      }

      
      function guessHeavy(){
          let heavyPackages = currentPackages.filter( p => p.heavy == true)
          console.log(heavyPackages);
          currentPackages = heavyPackages

          drawPackages()
      }
        
      function guessPriority(){
          let priorityPackages = currentPackages.filter( p => p.priority == true)
          console.log(priorityPackages);
          currentPackages = priorityPackages
          
          drawPackages()
      }

      function guessFragile(){
          let fragilePackages = currentPackages.filter( p => p.fragile == true)
          console.log(fragilePackages);
          currentPackages = fragilePackages

          drawPackages()
      }

      function guess(attribute){
        
        guesses++
        let filteredPackages = currentPackages.filter(v => v[attribute] == missingPackage[attribute])
        console.log(filteredPackages);
        currentPackages = filteredPackages
        drawPackages()
        drawScore()
      }

      function foundP(number){
          let found = currentPackages.find(p => p.trackingNumber == number)
          console.log(found);
          if (found.trackingNumber == missingPackage.trackingNumber){
              window.alert (`You found the package Congrats!!!`)
        } else {
                  window.alert (`You didn't find the package`)
              }
          }

         

          startGame()
          drawPackages()
