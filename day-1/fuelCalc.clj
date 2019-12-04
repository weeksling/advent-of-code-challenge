(ns clojure.examples.hello
    (:gen-class))
 
 ;; This program displays Hello World
 (defn Example []
    (with-open [rdr (clojure.java.io/reader "data.csv")]
    (println [(reduce conj [] (line-seq rdr))])))
 (Example)