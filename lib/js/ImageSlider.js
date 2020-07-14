

    // function for next slide 

    function nextImage(){
		
    	  content = ""
		for(k=1;k<13;k++)
		{
		if((image_set_Index*13)+k < image.length){content  = content + "<img class='Slider_Images' src="+image[(image_set_Index*13)+k]+">";}
		else{image_set_Index=-1;break;}
		}
		image_set_Index = image_set_Index + 1
		slider_content.innerHTML = content
		
    }


    // function for prew slide

    function prewImage(){
		image_set_Index = image_set_Index - 1
		if(image_set_Index >=0){
		
    	content = ""
		for(k=1;k<13;k++)
		{
		if((image_set_Index*13)+k < image.length){content  = content + "<img class='Slider_Images' src="+image[(image_set_Index*13)+k]+">";}
		else{image_set_Index=-1;break;}
		}
		
		slider_content.innerHTML = content
		}else{
		image_set_Index = 0
		}
    }
