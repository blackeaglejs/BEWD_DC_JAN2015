require 'pry'
puts "Enter an IP address: "
ipa = gets.chomp.to_s

def valid_ip(ipa)
	ipa_array = ipa.gsub('.',' ').scan(/\w+/)
	val_ip = []
	ipa_array.each do |num|
		numi = num.to_i
		if numi >= 0 and numi <= 255
			val_ip.push(numi)
		end
	end
	if val_ip.count == 4
		return true
	else
		return false
	end
end

valid_ip(ipa)