import random
# Step 1: Predefined word list
words = ["apple", "tiger", "chair", "robot", "house"]
# Step 2: Randomly choose a word
word = random.choice(words)
guessed_letters = []
incorrect_guesses = 0
max_incorrect = 6
# Step 3: Create display with underscores
display_word = ["_"] * len(word)
print("🎮 Welcome to Hangman Game!")
print("Guess the word one letter at a time.\n")
# Step 4: Game loop
while incorrect_guesses < max_incorrect and "_" in display_word:
    print("Word:", " ".join(display_word))
    print(f"Incorrect guesses left: {max_incorrect - incorrect_guesses}")
    guess = input("Enter a letter: ").lower()
    # Check if already guessed
    if guess in guessed_letters:
        print("⚠️ You already guessed that letter.\n")
        continue
    guessed_letters.append(guess)
    # Step 5: Check guess
    if guess in word:
        print("✅ Correct guess!\n")
        for i in range(len(word)):
            if word[i] == guess:
                display_word[i] = guess
    else:
        print("❌ Wrong guess!\n")
        incorrect_guesses += 1
# Step 6: Result
if "_" not in display_word:
    print("🎉 Congratulations! You guessed the word:", word)
else:
    print("💀 Game Over! The word was:", word)