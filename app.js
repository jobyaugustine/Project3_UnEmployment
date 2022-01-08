

// // Define a function that will create metadata for given sample
// function buildMetadata(selection) {
    
//     //Use the D3 library to read in `samples.json`.
//   // Read the json data
//   d3.json("samples.json").then((sampleData) => {

//       console.log(sampleData);

//       // Filter the data to get the sample's metadata
//       var tempmetaData = sampleData.metadata;
//       console.log("Inside buildMetadata function")
//       console.log(tempmetaData);

//       var sample = tempmetaData.filter(item => item.id == selection);
//       console.log("showing sample[0]:");
//       console.log(sample[0]);

//       // Specify the location of the metadata and update it
//        var metadata = d3.select("#sample-metadata").html("");

//     // displaying the metadata details in the Demographic Info section
//     //"metadata":[{"id": 940, "ethnicity": "Caucasian", "gender": "F", "age": 24.0, 
//     //"location": "Beaufort/NC", "bbtype": "I", "wfreq": 2.0}, 
//     //{"id": 941, "ethnicity": "Caucasian/Midleastern", "gender": "F", "age": 34.0, 
//     //"location": "Chicago/IL", "bbtype": "I", "wfreq": 1.0}, ]

//       Object.entries(sample[0]).forEach(([key, value]) => {
//           metadata.append("p").text(`${key}: ${value}`);
//       });

//       console.log("next again");
//       console.log(metadata);
//   });
// }

// // Define a function that will create charts for given sample
// function buildCharts(selection) {

//   // Read the json data
//   d3.json("samples.json").then((sampleData) => {

//       // filter the data to get the sample's OTU data
    
//       var tempsamplesData = sampleData.samples;
//       console.log("Inside buildCharts function")
//       console.log(tempsamplesData);

//       var sampleDict = tempsamplesData.filter(item => item.id == selection)[0];
//       console.log("sampleDict")
//       console.log(sampleDict);


//       var sampleValues = sampleDict.sample_values; 
//       var barChartValues = sampleValues.slice(0, 10).reverse();
//       console.log("sample_values")
//       console.log(barChartValues);
// // for labels of the bar chart
//       var idValues = sampleDict.otu_ids;
//       var barChartLabels = idValues.slice(0, 10).reverse();
//       console.log("otu_ids");
//       console.log(barChartLabels);

//       var reformattedLabels = [];
//       barChartLabels.forEach((label) => {
//           reformattedLabels.push("OTU " + label);
//       });

//       console.log("formatted Labels");
//       console.log(reformattedLabels);

// // for hover text for the bar chart
//       var hovertext = sampleDict.otu_labels;
//       var barCharthovertext = hovertext.slice(0, 10).reverse();
//       console.log("otu_labels");
//       console.log(barCharthovertext);

//       // Create bar chart 

//       var barChartTrace = {
//           type: "bar",
//           y: reformattedLabels,
//           x: barChartValues,
//           text: barCharthovertext,
//           orientation: 'h'
//       };

//       var barChartData = [barChartTrace];

//       Plotly.newPlot("bar", barChartData);

//       // Create bubble chart 

//       var bubbleChartTrace = {
//           x: idValues,
//           y: sampleValues,
//           text: hovertext,
//           mode: "markers",
//           marker: {
//               color: idValues,
//               size: sampleValues
//           }
//       };

//       var bubbleChartData = [bubbleChartTrace];

//       var layout = {
//           showlegend: false,
//           height: 600,
//           width: 1000,
//           xaxis: {
//               title: "OTU ID"
//           }
//       };

//       Plotly.newPlot("bubble", bubbleChartData, layout);
//   });
// }

// Define function that will run on page load
function init() {

  // Read json data
//   d3.json("samples.json").then((sampleData) => {

      // filtering the data to get sample names  - 940,941 etc
      var filteredData = ['2004','2005','2006','2007','2008','2009', '2010','2011','2012','2013','2014'];
    //   console.log("parsed data inside init function")
    //   console.log(filteredData);

      // to create the dropdown option for each sample from the html tag
      // var dropdownMenu =Document.select("#selDataset");
      var dropdownMenu =document.getElementById("#selDataset");

      // populating the dropdown with the values
     
      for(i=0;i<filteredData.length;i++)
      {
          dropdownMenu.append(filteredData[i]);
          // var mylist = document.getElementById("myList");  
          document.getElementById(filteredData[i]).value = dropdownMenu.options[dropdownMenu.selectedIndex].text;
          // filteredData[i]
          
      }
  
      // Use first sample to build metadata and initial plots
    //   buildMetadata(filteredData[0]);

    //   buildCharts(filteredData[0]);

    }

//  function optionChanged(newSelection) {

// //   // Update metadata with newly selected sample
//    buildMetadata(newSelection); 
// //   // Update charts with newly selected sample
//    buildCharts(newSelection);
//  }

// Initialize dashboard on page load
init();