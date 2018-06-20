function changeOffices(id)
{
	
	
	var idLocation = parseFloat(id);
	if (idLocation == "1")
	{
	document.getElementById('locationS').src= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.664098536989!2d114.19261811453036!3d22.290710485328542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE3JzI2LjYiTiAxMTTCsDExJzQxLjMiRQ!5e0!3m2!1sid!2sid!4v1525663122901';
	}
	else if(idLocation == "2")
	{
	document.getElementById('locationS').src= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.8749407624573!2d121.47126161475124!3d31.224193981468535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDEzJzI3LjEiTiAxMjHCsDI4JzI0LjQiRQ!5e0!3m2!1sid!2sid!4v1525663706905';	
	}
	else if(idLocation == "3")
	{
	document.getElementById('locationS').src= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.2994562727845!2d106.82551463281072!3d-6.1843987748365885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42e56fba48b%3A0xdb2bf6ebc45e3db7!2sGedung+Skybee+One+GF!5e0!3m2!1sid!2sid!4v1527045340078';	
	}
	else if(idLocation == "4")
	{
	document.getElementById('locationS').src= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.117884600007!2d113.94202541453546!3d22.537256385200884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMyJzE0LjEiTiAxMTPCsDU2JzM5LjIiRQ!5e0!3m2!1sid!2sid!4v1525663225572';	
	}
	
	else
	{
		alert('Some Error!');
	document.getElementById('locationS').src= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.664098536989!2d114.19261811453036!3d22.290710485328542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE3JzI2LjYiTiAxMTTCsDExJzQxLjMiRQ!5e0!3m2!1sid!2sid!4v1525663122901';	
	}
}