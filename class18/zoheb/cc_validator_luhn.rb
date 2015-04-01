require 'pry'
 def sumDigits(num, base = 10)
   num.to_s(base).split(//).inject(0) {|z, x| z + x.to_i(base)}
 end

def valid(x)
	cc_arr = x.to_s.chars.map.to_a
	cc_arr_int = []
	cc_arr.each do |x|
		y = x.to_i
		cc_arr_int.push(y)
	end
	cc_arr_doubl = cc_arr_int.map.with_index{|v,i| i % 2 == 0 ? v: v*2}
	total = 0 
	cc_arr_doubl.each do |number|
		if number < 10 
			total += number
		elsif number >= 10 
			a = sumDigits(number)
			total += a
		end
	end
	if total % 10 == 0
		puts "Valid Credit Card Number"
	else
		puts "Invalid Credit Card Number"
	end
	binding.pry
end

valid(4408041234567893)