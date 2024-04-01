// Transcrypt'ed from Python, 2023-09-21 11:51:21
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var gen_random_int = function (number, seed) {
	var result = [];
	var mylist = list (range (number));
	random.seed (seed);
	random.shuffle (mylist);
	var result = mylist;
	return result;
};
// pass;
export var generate = function () {
	var number = 10;
	var seed = 200;
	var result = gen_random_int (number, seed);
	// pass;
	var array = result;
	var my_string = ', '.join (map (str, array)) + '.';
	var array_str = my_string;
	document.getElementById ('generate').innerHTML = array_str;
};
export var bubble_sort = function (array) {
	var n = len (array);
	var swapped = true;
	while (swapped) {
		var swapped = false;
		var new_n = 0;
		for (var idx = 1; idx < n; idx++) {
			if (array [idx - 1] > array [idx]) {
				var __left0__ = tuple ([array [idx], array [idx - 1]]);
				array [idx - 1] = __left0__ [0];
				array [idx] = __left0__ [1];
				var swapped = true;
				var new_n = idx;
			}
		}
		var n = new_n;
		// pass;
	}
};
export var sortnumber1 = function () {
	var my_string = document.getElementById ('generate').innerHTML;
	var my_string = my_string.py_replace ('.', '');
	var my_string = my_string.py_split (', ');
	var list_of_int = (function () {
		var __accu0__ = [];
		for (var i of my_string) {
			__accu0__.append (eval (i));
		}
		return __accu0__;
	}) ();
	bubble_sort (list_of_int);
	var my_new_string = ', '.join (map (str, list_of_int)) + '.';
	// pass;
	var array_str = my_new_string;
	document.getElementById ('sorted').innerHTML = array_str;
};
export var sortnumber2 = function () {
	var value = document.getElementsByName ('numbers') [0].value;
	if (value == '') {
		window.alert ('Your textbox is empty');
		return ;
	}
	var new_value = value.py_split (',');
	var new_list = (function () {
		var __accu0__ = [];
		for (var i of new_value) {
			__accu0__.append (eval (i));
		}
		return __accu0__;
	}) ();
	bubble_sort (new_list);
	var my_new_str = ', '.join (map (str, new_list)) + '.';
	// pass;
	var array_str = my_new_str;
	document.getElementById ('sorted').innerHTML = array_str;
};

//# sourceMappingURL=library.map
