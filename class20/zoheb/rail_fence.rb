require 'pry'
# Doing some research, it looks like the way this works is that the cipher has you write each letter on a line. 
# So the first letter goes on line 1, the second letter goes on the second line, the third letter goes on the third. 
# The fourth letter goes on line 1, 5th on 2, 6th on 3. you get the idea. 
# So let's do it this way. 
# 1) split each letter into an array. 
# 2) Use the index to split the letters into three separate arrays. 
# 3) Concatenate the arrays. 
puts "Enter in something to be coded."
uncode = gets.chomp

def rail_fence(uncode)
	uncode_arr = uncode.chars
	code_arr_1 = []
	code_arr_2 = []
	code_arr_3 = []
	uncode_arr.each do |let|
		if uncode_arr.index(let) % 4 == 0
			code_arr_1.push(let)
		elsif uncode_arr.index(let) % 3 == 2
			code_arr_2.push(let)
		elsif uncode_arr.index(let) % 3 == 1
			code_arr_3.push(let)
		end
	end
	code_arr_4 = code_arr_1.concat(code_arr_3)
	code_arr_5 = code_arr_4.concat(code_arr_2)
	puts code_arr_5
end

rail_fence(uncode)