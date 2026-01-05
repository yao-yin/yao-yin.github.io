---
title: "My Journey Learning Rust"
date: 2025-12-15
tags: [tech, learning, rust]
---

I've been learning Rust for the past few months, and I wanted to share my experience so far.

## Why Rust?

I decided to learn Rust because:

- **Memory safety** without garbage collection
- **Performance** comparable to C/C++
- **Growing ecosystem** with great tooling
- **Challenge** - I wanted to learn something fundamentally different

## The Learning Curve

Let's be honest: Rust has a steep learning curve. The borrow checker was initially frustrating, but now I appreciate what it does.

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = &s1; // borrowing, not moving
    println!("{} {}", s1, s2);
}
```

## Resources That Helped

- **The Rust Book** - Official documentation, excellent quality
- **Rustlings** - Interactive exercises
- **Exercism** - Practice problems with mentorship

## What I've Built

So far, I've built:

1. A simple CLI tool for file management
2. A basic web server using Actix
3. Several small utilities for personal use

## Next Steps

I'm planning to:

- Contribute to an open source Rust project
- Build a more complex application
- Explore async Rust more deeply

If you're considering learning Rust, I'd say go for it. The investment is worth it.
