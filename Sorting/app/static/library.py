from org.transcrypt.stubs.browser import *
import random

def gen_random_int(number, seed):
	result = []
	mylist = list(range(number))
	random.seed(seed)
	random.shuffle(mylist)
	result = mylist
	return result

def generate():
	number = 10
	seed = 200
	result = gen_random_int(number, seed)
	pass

	array = result
	my_string = (', '.join(map(str, array)) + '.')
	# convert the items into one single string 
	# the number should be separated by a comma
	# and a full stop should end the string.
	
	array_str = my_string

	# This line is to place the string into the HTML
	# under div section with the id called "generate"	
	document.getElementById("generate").innerHTML = array_str

def insertion_sort(array):
	n = len(array)
	swapped = True
	while swapped:
		swapped = False
		new_n = 0
		for idx in range(1, n):
			if array[idx-1] > array[idx]:
				array[idx - 1], array[idx] = array[idx], array[idx - 1]
				swapped = True
				new_n = idx
		n = new_n
		pass

def sortnumber1():
	my_string = document.getElementById("generate").innerHTML
	my_string = my_string.replace('.', "")
	my_string = my_string.split(', ')
	list_of_int = [float(i) for i in my_string]
	insertion_sort(list_of_int)
	my_new_string = (', '.join(map(str, list_of_int)) + '.')

	'''	This function is used in Exercise 1.
		The function is called when the sort button is clicked.

		Purpose of Function:
		- get the list of numbers from the "generate" HTML id, use document.getElementById(id).innerHTML
		- create a list of integers from the string of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	pass

	array_str = my_new_string
	
	document.getElementById("sorted").innerHTML = array_str

def sortnumber2():
	'''	This function is used in Exercise 2.
		The function is called when the sort button is clicked.

		Purpose of Function:
		- Get the numbers from a string variable "value".
		- Split the string using comma as the separator and convert them to a list of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	# The following line get the value of the text input called "numbers"
	value = document.getElementsByName("numbers")[0].value

	# Throw alert and stop if nothing in the text input
	if value == "":
		window.alert("Your textbox is empty")
		return
	new_value = value.split(',')
	new_list = [eval(i) for i in new_value]
	insertion_sort(new_list)
	my_new_str = (', '.join(map(str, new_list)) + '.')
	pass
	
	# store the final string to the variable array_str
	array_str = my_new_str

	document.getElementById("sorted").innerHTML = array_str


