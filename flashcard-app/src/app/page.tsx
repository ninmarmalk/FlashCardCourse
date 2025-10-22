import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Flashcard Learning
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Master any subject with smart, interactive flashcards
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Browse Decks
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Create Decks
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Organize your flashcards into custom decks for different subjects and topics
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Smart Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Practice with spaced repetition to maximize retention and learning efficiency
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Track Progress
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor your learning journey with detailed statistics and insights
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
            Your Learning Dashboard
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Total Decks</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Cards Mastered</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Study Sessions</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Day Streak</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
