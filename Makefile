SHELL := /bin/bash

.PHONY: help install dev build preview format format-check test test-watch ci

help:
	@echo "Available targets:"
	@echo "  make install        Install dependencies"
	@echo "  make dev            Start the LAN-accessible Vite server on port 5173"
	@echo "  make build          Build the app"
	@echo "  make preview        Preview the production build"
	@echo "  make format         Format the repository with Prettier"
	@echo "  make format-check   Check formatting with Prettier"
	@echo "  make test           Run unit tests with coverage"
	@echo "  make test-watch     Run unit tests in watch mode"
	@echo "  make ci             Run formatting, tests, and build"

install:
	npm ci

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

format:
	npm run format

format-check:
	npm run format:check

test:
	npm run test

test-watch:
	npm run test:watch

ci:
	$(MAKE) format-check
	$(MAKE) test
	$(MAKE) build
