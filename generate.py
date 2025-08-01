import os

# Folder containing frame files
frames_folder = "frames"

# Output file
output_file = "animation.txt"

# Number of frames (update this if you have more frames)
total_frames = 5

# Create or overwrite animation.txt
with open(output_file, "w", encoding="utf-8") as outfile:
    for i in range(1, total_frames + 1):
        frame_path = os.path.join(frames_folder, f"frame{i}.txt")
        
        if os.path.exists(frame_path):
            with open(frame_path, "r", encoding="utf-8") as f:
                frame_content = f.read()
                
                outfile.write(f"Frame {i}:\n")
                outfile.write(frame_content.strip())
                outfile.write("\n\n--------\n\n")
        else:
            print(f"Warning: {frame_path} not found. Skipping.")
