README for simpleSassFramework 
================================

Simple tool to create a starting document using CSS reset for elements and a generated grid

---------------------------------------

* Uses Sass for CSS grid layout generation

* Includes HTML 5 layout for supporting Sass generated CSS 

---------------------------------------


_Set variables to calclute your grid:_

`
	!gTotal = 960px 							// total page width
	!grid = 16 									// number of columns
	!gGutter = 20px 							// gutter between columns
	                                        	
	!gMargin = !gGutter / 2						// set margin at half of gutter
	!gCol = ( !gTotal / !grid ) - !gGutter 		// single column width
`

Execute the command in your terminal app # `sass style.sass ./style.css`


## This is a basic template tool for generating your own grid system using Sass ##

Basically this builds on best practices of existing CSS grid systems like 960.gs or Blueprint in a bare bones fashion.

The generated CSS includes classes for prototyping or designing in a browser; and also creates variables for assignment to your semantic id’s for cleaner markup.

An HTML 5 layout is included as an example, with a simple layout and CSS drop-down menus (son-of-suckerfish style).