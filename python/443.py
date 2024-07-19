# ["a","a","b","b","c","c","c"] a 2 b 2 c 3

def compression(chars):
    char_len = 0
    group_len = 1
    j = 0

    for i in range(len(chars)):
        if chars[i] == chars[j]:
            group_len+=1
        else:
            char_len+=1
            if group_len > 1:
                if len(str(group_len)) > 1:
                    char_len=2
                else:
                    char_len+=1
            group_len = 1
            j = i

    if i == len(chars) - 1:
        char_len+=1
        if group_len > 1:
            if len(str(group_len)) > 1:
                char_len=2
            else:
                char_len+=1
    
    return char_len

print(compression(["a","a","b","b","c","c","c","a"]))