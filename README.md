simpleSassFramework 
================================

Simple tool to create a starting document using CSS reset for elements and a generated grid

---------------------------------------

* Uses Sass for CSS grid layout generation

* Includes HTML 5 layout for supporting Sass generated CSS 

---------------------------------------


_Set variables to calclute your grid:_

`!gTotal = 960px 							// total page width
!grid = 16 									// number of columns
!gGutter = 20px 							// gutter between columns
                                        	
!gMargin = !gGutter / 2						// set margin at half of gutter
!gCol = ( !gTotal / !grid ) - !gGutter 		// single column width`