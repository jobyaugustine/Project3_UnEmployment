function init() {
      
    //Year Drop Down
        var filteredData = ['2004','2005','2006','2007','2008','2009', '2010','2011','2012','2013','2014'];
        var dropdownMenu =document.getElementById("selDataset");
        // populating the dropdown with the values
        for(var i=0;i<filteredData.length;i++)
        {
            var opt = document.createElement('option');
            opt.innerHTML = filteredData[i];
            opt.value = filteredData[i];
            dropdownMenu.appendChild(opt);
            
            
        }
    //Crime Drop Down
        var crimeData = ['murder','rape', 'robbery', 'aggravated assault', 'all violent crimes', 'burglary', 'larceny theft', 'vehicle theft', 'all property crimes'];
        var crimedropdown = document.getElementById("crimeDataset");
        // populating the dropdown with the values
        for(var i=0;i<crimeData.length;i++)
        {
            var opt = document.createElement('option');
            opt.innerHTML = crimeData[i];
            opt.value = crimeData[i];
            crimedropdown.appendChild(opt);
            
            
        }
        
        // Use first sample to build metadata and initial plots
         buildMetadata(filteredData[0]);
         //<img src="pic_trulli.jpg" alt="Italian Trulli">
  
      }
      
  
    function optionChanged(newSelection) {
  
  //   // Update metadata with newly selected sample
    //  buildMetadata(newSelection); 
  //   // Update charts with newly selected sample
   //  buildCharts(newSelection);
   }
  
  // Initialize dashboard on page load
  init();