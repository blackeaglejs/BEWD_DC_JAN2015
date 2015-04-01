require 'pry'
puts "Give me a word!"
word = gets.chomp


def letter_count(word)
	w_array = word.chars
	counts = Hash.new 0
	w_array.each do |l|
	if l != " "
		counts[l] += 1
	end
	end
	puts counts
end

letter_count(word)